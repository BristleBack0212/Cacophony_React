class Api::SessionsController < ApplicationController

  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: ["Invalid Email/Password combination"], status: 401
    else
    #Log them in and redirect them if we find them
      login(@user)
      render 'api/users/show';
    end

  end

  def destroy 
    if (current_user)
      logout
      render json: ["Logout Succesfull"], status: 200
    else  
      render json: ["No user to log out"], status: 404
    end
  end
end
