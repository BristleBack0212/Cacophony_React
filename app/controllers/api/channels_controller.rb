class Api::ChannelsController < ApplicationController

  def show
    @channel = Channel.find_by(id: params[:id])
    render :show
  end


  def create
    @channel = Channel.new(channel_params)
    if @channel.save
      render :show
    else  
      render json: @channel.errors.full_messages, status: 400
    end
  end

  def destroy
    @channel = Channel.find_by(id: params[:id])
    @channel.destroy
    render :delete
  end

  def update
    @channel = Channel.find_by(id: params[:id])
    if @channel.update(channel_params)
      @welcome_message = @channel.messages.first
      @welcome_message.update(body: "Welcome to #{@channel.name} channel!")
      render :show
    else  
      render json: @channel.errors.full_messages, status: 400
    end
  end

  private
  def channel_params
    params.require(:channel).permit(:server_id, :name)
  end

end
