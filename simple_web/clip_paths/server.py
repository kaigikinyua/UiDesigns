import asyncio
import websockets

async def hello(websocket,path):
    message=await websocket.recv()
    print(f"< {message}>")
    await websocket.send(" Hello there")
start_server=websockets.serve(hello,"localhost",9000)
asyncio.get_event_loop().run_until_complete(start_server)
asyncio.get_event_loop().run_forever()