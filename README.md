# Cacophony

-----

Cacophony is a Full Stack clone of the text portion of Discord. Cacophony allows a user to make an account in order to live message other users both in servers' channels as well as through direct messages. A user can either create their own server or join an existing public server. Server owners can also create/edit channels to organize the many conversations happening between members. 

### Key Features

#### Live Chat

Users can chat in real-time through WebSockets implemented by Action Cables. This is achieved by utilizing React life cycle methods and Action Cables. When a component mounts, a cable subscription is set up, when the component is updated, the subscription is unsubscribed and then resubscribed with the new params, and finally when the component unmounts the subscription is removed.

```JavaScript
  // Inside a React Class Component containing a channel's messages or dms
  componentDidMount(){
    this.props.fetchChannel(this.props.channelId);
    this.subscribe()
  }
  
 componentDidUpdate(prevProps){
      if(PrevProps !== this.props){
      this.unsubscribe();
      this.subscribe();
      // Refetch Channel to make sure the proper messages are displayed
      this.props.fetchChannel(this.props.match.params.channelId)
     }
 }
 
  componentWillUnmount(){
    this.unsubscribe()
  }
  
```

#### Creating Servers

The trickiest part of creating servers was having the app land on the right page after the server was created, i.e., push the route to the server's first channel. However, before the backend creates the server (and in turn the server's first channel), the frontend cannot reroute properly as it does not know the id of the new server nor the id of the server's first channel. To solve this problem, Cacophony waits for the promise of the createServer Function to properly push the frontend with the response data from the server creation.


``` JavaScript

   // In the server form component, this function handles the submitting of server creation form
    e.preventDefault();
    let that = this;
    // action = createServer function
    this.props.action(this.state).then(function(action){
      let server  = action.server.server
      return that.props.history.push(`/servers/${server.id}/${server.firstChannelId}`);
    });

```

### Technologies Implemented
---- 

* Frontend
    * React and Redux for frontend state management and component rendering
    * HTML for creating the skeleton of the React Components and App as a whole
    * CSS to provide intuitive and user-friendly styling and interface
    * JavaScript to provide the logic necessary for dynamically updating the frontend
* Backend 
    * Rails for a robust backend web application framework
    * Ruby for handling backend and database updating logic 
    * PostgresSQL for lightweight data storage and manipulation
* Full Stack
    * Action Cables for live messaging
    * Heroku for hosting and production

### Planned Features
----
* Start a dm through seraching a username and number tag.
* Join servers by invite/name.

### Acknowledgments
----
The author would like to acknowledge that the following were invaluable to understanding and using the concepts that made Cacophony possible:

* Utilizing Action Cables
* Deploying Action Cables to Heroku
* All images used were from Discord and used for educational purposes.
* All my friends who live tested Cacophony and gave valuable user feedback.
* A special thanks goes out to Jonathan W and Nick P for keeping the author sane during development and always being down to help squash some bugs.
