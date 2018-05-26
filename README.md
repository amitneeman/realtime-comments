This is WOIP

# realtime-comments
a complete solution to displaying subject-based realtime comments based on react, redux, nodejs, socketio, express and mongoDB

# Usage:

To set this up you need to run mongoDB on your local machine. then you can start the commentors-server.

The client project is based on create-react-app and redux, and requires 2 url parameters to start - subject, and user. for example:

#http://localhost:3000/?user=amitneeman&subject=1231242343242

where user represents the commenting user and the subejct represents the subject being commented on.

initialy, this client is supposed to be embeded as an iframe in a parent side which will provide the user and the subject, and this solution will provide out of the box realtime comments using socket.io and express.
