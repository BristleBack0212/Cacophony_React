json.users do
  json.set! @current_user.id do 
    json.extract! @current_user, :id, :username, :email, :number_tag, :color_id
  end
  @dm_servers.each do |dm_server|
    dm_server.members.each do |user|
      if user.id != @current_user.id
        json.set! user.id do
          json.dmId dm_server.id
          json.extract! user, :id, :username, :email, :number_tag, :color_id
        end
      end
    end
  end
end




