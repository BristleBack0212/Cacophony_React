#Users
json.users do 
  @dm_server.members.each do |member|
    if member.id != @current_user.id
      json.set! member.id do
        json.dmId @dm_server.id
        json.extract! member, :id, :username, :email, :number_tag, :color_id
      end
    end
  end
end

#Messages
json.dms do 
  @dm_server.messages.each do |dm|
    json.set! dm.id do
      est = Time.zone.utc_to_local(dm.created_at)
      # Handle utc conversion issues to get actual EST
      est = est + 4.hours
      json.author_name dm.author.username
      json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
      json.extract! dm, :id, :dm_server_id, :author_id, :body
    end
  end
end

