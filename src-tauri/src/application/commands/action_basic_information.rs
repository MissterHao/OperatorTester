
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
pub fn xddddd(name: &str) -> String {
    format!("XDDDDDDD!! I am {}!", name)
}
