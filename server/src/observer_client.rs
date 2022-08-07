use std::{
    net::TcpStream,
    sync::{Arc, Mutex},
    thread,
    time::Duration,
};

use tungstenite::{Message, WebSocket};

use crate::{racket_client::RacketClientHandler, ServerState};

pub struct ObserverClientHandler;
impl ObserverClientHandler {
    pub const NAME: &'static str = "observer";

    pub fn run(data: Arc<Mutex<ServerState>>, observers: Arc<Mutex<Vec<WebSocket<TcpStream>>>>) {
        thread::spawn(move || loop {
            if let Ok(data) = data.lock() {
                let data_vec: Vec<_> = data.iter().map(|(_, val)| val).collect();
                // don't send empty messages to the users
                if !data.is_empty() {
                    observers.lock().unwrap().retain_mut(|observer| {
                        if let Err(e) = observer
                            .write_message(Message::text(serde_json::to_string(&data_vec).unwrap()))
                        {
                            log::error!("observer error [{}]", e);
                            return false;
                        }

                        true
                    });
                }
            }

            // sleep for 60 seconds to prevent resource starvation
            thread::sleep(Duration::from_secs_f64(RacketClientHandler::DELTA));
        });
    }
}
