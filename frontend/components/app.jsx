import React from "react";
import { Switch } from "react-router";
import { Redirect } from "react-router";
import UserNavContainer from "./user_nav/user_nav_container"; 
import SignupFormContainer from "./session_form/signup_form_container";
import LoginFormContainer from "./session_form/login_form_container";
import HomePageContainer from "./home_page/home_page_container";
import UserProfileContainer from "./user_profile/user_profile_container.jsx"
import { AuthRoute, ProtectedRoute} from "../util/route_utils";
import ServerNavContainer from "./server_nav/server_nav_container";
import ServerMemeberContainer from "./server_members/server_members_container";
import ChannelNavContainer from "./channel_nav/channel_nav_container";
import ChannelMessageContainer from "./channel_messages/channel_message_container";
import LineAcrossTop from "./line_across/line_across_top";
import DmMessagesContainer from "./dm_messages/dm_messages_container";
import DmNavContainer from "./dm_nav/dm_nav_container";
import emptyDmMessages from "./dm_messages/empty_dm_messages";

const App = () => (
  <div>

     {/* Auth Routes */}
      <Switch> 
        <AuthRoute path="/login" component={LoginFormContainer} />
        <AuthRoute path="/signup" component={SignupFormContainer} /> 
        <AuthRoute exact path="/" component={HomePageContainer}/> 
      </Switch>

      <ProtectedRoute path="/servers/:serverId" component={ServerNavContainer} />
      <ProtectedRoute path ="/servers" component = {UserNavContainer}/>
      {/* Render either dm Nav or channel nav up */}
      <Switch>
      <ProtectedRoute path="/servers/@me/:otherUserId" component={DmNavContainer}/>
      <ProtectedRoute path="/servers/@me/" component={DmNavContainer}/>
      <ProtectedRoute path="/servers/:serverId/:channelId" component={ChannelNavContainer}/>
      </Switch>
      {/* Rerender the least intenstive Component as a check */}
      <Switch> 
        <ProtectedRoute path ="/servers/@me" component = {UserNavContainer}/>
        <ProtectedRoute path="/servers/:serverId" component={ServerMemeberContainer}/>
      </Switch>
      {/* Render correct message container */}
      <Switch> 
        <ProtectedRoute exact path="/servers/:serverId/:channelId"
        component= {ChannelMessageContainer}/>
        <ProtectedRoute path="/servers/@me/:otherUserId/:dmServerId" component={DmMessagesContainer}/>
        <ProtectedRoute path="/servers/@me" component={emptyDmMessages}/>
      </Switch>

      <Switch>
        <ProtectedRoute path="/servers" component={LineAcrossTop}/>
        <ProtectedRoute path="/users/:userId" component={UserProfileContainer}/>
      </Switch>
  </div>
);

export default App;