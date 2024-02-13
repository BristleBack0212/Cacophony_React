# == Schema Information
#
# Table name: messages
#
#  id         :bigint           not null, primary key
#  channel_id :integer          not null
#  author_id  :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Message < ApplicationRecord
  # Validations

  validates :channel_id, :author_id, :body, presence: true
  validates :body, length: {minimum: 1}

  # Assocaitions
  
  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :channel, 
    foreign_key: :channel_id,
    class_name: :Channel

end
