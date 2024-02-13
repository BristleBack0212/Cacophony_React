class Api::DmMembershipsController < ApplicationController
  def create
    @dm_membership = DmMembership.new(dm_membership_params)
    @dm_server = DmServer.find_by(id: @dm_membership.dm_server_id)
    @current_user = current_user
    if @dm_membership.save
      render :show
    else    
      render json: @dm_membership.errors.full_messages, status: 400
    end
  end

  def destroy
    @dm_membership = DmMembership.find_by(dm_membership_params)
    @dm = DmServer.find_by(id: @dm_membership.dm_server_id)
    @dm_membership.destroy if @dm_membership.member_id === current_user.id
    render 'api/dm_servers/show'
  end


  private
  def dm_membership_params
    params.require(:dm_membership).permit(:member_id, :dm_server_id)
  end
end
