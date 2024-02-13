# == Schema Information
#
# Table name: channels
#
#  id         :bigint           not null, primary key
#  server_id  :integer          not null
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Channel < ApplicationRecord
  # Validations

  validates :server_id, :name, presence: true
  validates :name, uniqueness: {scope: :server_id}
  after_create :create_welecome_post

  # Assocations

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

  has_many :messages,
    foreign_key: :channel_id, 
    class_name: :Message,
    dependent: :destroy

  def create_welecome_post
    Message.create(channel_id: self.id, author_id: 776, 
      body: "Welcome to #{self.name} channel!")
  end
end
