class Api::DmServersController < ApplicationController

  def index
    # This should never be run without being logged in, so current_user should
    # always exist.
    @current_user = current_user;
    @dm_servers = @current_user.dm_servers.includes(:members)
    render :index
  end

  def create
    @dm_server = DmServer.new()
    @current_user = current_user
    if @dm_server.save
      render :create
    else  
      render json: @dm_server.errors.full_messages, status: 400
    end
  end

  def show
    @dm_server = DmServer.find_by(id: params[:id])
    @current_user = current_user
    render :show
  end

  def destroy
    @dm_server = DmServer.find_by(id: params[:id])
    @current_user = current_user
    @dm_server.destroy
  end

  private

  def userid
    params[:user]
  end
end
