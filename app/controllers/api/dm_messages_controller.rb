class Api::DmMessagesController < ApplicationController

  def create
    @dm = DmMessage.new(dm_params)
    @dm_server = DmServer.find_by(id: @dm[:dm_server_id])
    if @dm.save
      DmChannel.broadcast_to(@dm_server, @dm)
      render :show
    else  
      render json: @dm.errors.full_messages, status: 400
    end
  end

  def destroy
    @dm = DmMessage.find_by(id: params[:id])
    @dm_server = DmServer.find_by(id: @dm[:dm_server_id])
    @dm.destroy
    DmChannel.broadcast_to(@dm_server, @dm.id)
    render :show
  end

  def update
    @dm = DmMessage.find_by(id: params[:id])
    @dm_server = DmServer.find_by(id: @dm[:dm_server_id])
    if @dm.update(dm_params)
      DmChannel.broadcast_to(@dm_server, @dm)
      render :show
    else  
      render json: @dm.errors.full_messages, status: 400
    end
  end

  private
  def dm_params
    params.require(:dm).permit(:dm_server_id, :author_id, :body)
  end
end
