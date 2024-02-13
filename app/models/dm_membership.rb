# == Schema Information
#
# Table name: dm_memberships
#
#  id           :bigint           not null, primary key
#  member_id    :integer          not null
#  dm_server_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class DmMembership < ApplicationRecord

  #Validations
  validates :member_id, uniqueness: {scope: :dm_server_id}

  #Associations
  belongs_to :dm_server,
    foreign_key: :dm_server_id,
    class_name: :DmServer

  belongs_to :member, 
    foreign_key: :member_id, 
    class_name: :User
  
end
