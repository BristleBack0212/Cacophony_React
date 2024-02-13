# == Schema Information
#
# Table name: dm_messages
#
#  id           :bigint           not null, primary key
#  dm_server_id :integer          not null
#  author_id    :integer          not null
#  body         :text             not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class DmMessage < ApplicationRecord

  #Validations

  validates :dm_server_id, :author_id, :body, presence: true
  validates :body, length: {minimum: 1}

  #Associations

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :dm_server, 
    foreign_key: :dm_server_id,
    class_name: :DmServer

end
