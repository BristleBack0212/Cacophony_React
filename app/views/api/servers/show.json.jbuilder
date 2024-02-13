json.server do 
  json.first_channel_id @server.channels.first.id
  json.extract! @server, :id, :name, :owner_id, :public
end

json.users do 
  @server.members.each do |member|
    json.set! member.id do
      json.extract! member, :id, :username, :email, :number_tag, :color_id
    end
  end
end

json.channels do
  @server.channels.each do |channel|
    json.set! channel.id do 
      json.extract! channel, :id, :name, :server_id
    end
  end
end

  # Messages of the first channel
json.messages do 
  messages = @server.channels.first.messages.includes(:author)
  messages.each do |message|
    json.set! message.id do
      est = Time.zone.utc_to_local(message.created_at)
      # Handle utc conversion issues to get actual EST
      est = est + 4.hours
      json.author_name message.author.username
      json.created_at est.strftime("%-m/%-d/%Y %-I:%M:%S %p")
      json.extract! message, :id, :channel_id, :author_id, :body
    end
  end
end



