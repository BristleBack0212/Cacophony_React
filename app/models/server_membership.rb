# == Schema Information
#
# Table name: server_memberships
#
#  id         :bigint           not null, primary key
#  member_id  :integer          not null
#  server_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class ServerMembership < ApplicationRecord

  #Validations
  
  validates :member_id, uniqueness: {scope: :server_id}

  #Associations

  belongs_to :server,
    foreign_key: :server_id,
    class_name: :Server

  belongs_to :member, 
    foreign_key: :member_id, 
    class_name: :User
  
end
