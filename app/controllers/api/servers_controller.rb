class Api::ServersController < ApplicationController

  def index
    # Would never need to search private servers by themselves so general index
    # will only be public servers.
    @servers = Server.where("servers.public = true").includes(:channels)
    @current_user = userid ? current_user : false;
    @servers = @current_user.servers.includes(:channels) if (@current_user)
    render :index
  end
  
  def create
    @server = Server.new(server_params)
    if @server.save
      render :show
    else   
      render json: @server.errors.full_messages, status: 400
    end
  end

  def show
    # Use where instead of find by to not use N+1 queries)
    @server = Server.where("id = #{params[:id]}").includes(:channels).first
    render :show
  end

  def update
    # Use where instead of find to avoid use N+1 queries)
    @server = Server.where("id = #{params[:id]}").includes(:channels).first
    if @server.update(server_params)
      render :show
    else 
      render json: @server.errors.full_messages, status: 400
    end
  end

  def destroy 
    @server = Server.find_by(id: params[:id])
    @server.destroy; 
  end

  private
  def server_params
    params.require(:server).permit(:owner_id, :name, :public, :id)
  end

  def userid
    params[:user]
  end
end
