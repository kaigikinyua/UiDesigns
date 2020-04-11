from flask import Flask
from flask_socketio import SocketIO,send,emit

app=Flask(__name__)
app.config['SECRET_KEY']='secret'
socketio=SocketIO(app,cors_allowed_origins="*")

@socketio.on('connect')
def handle_connection():
    print("Connection established")
    send("Hello There new Client")

@socketio.on('message')
def handle_message(message):
    print(f"Got the message {message}")

@socketio.on('typing')
def typing(data):
    print(f"User {data['username']} is typing")
    f_data=str(data['username'])+" is typing..."
    emit('broadcast',f_data,broadcast=True)

if __name__=="__main__":
    socketio.run(app)