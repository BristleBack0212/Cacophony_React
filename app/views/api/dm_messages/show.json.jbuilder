json.extract! @dm, :id, :dm_server_id, :author_id, :created_at, :body
json.authorName @dm.author.username
