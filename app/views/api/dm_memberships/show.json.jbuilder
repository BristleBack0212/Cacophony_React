@dm_server.members.each do |member|
  if member.id != @current_user.id
    json.user do 
      json.extract! member, :id, :username, :email, :number_tag, :color_id
    end
  end
end