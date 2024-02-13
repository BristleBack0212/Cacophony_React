# == Schema Information
#
# Table name: servers
#
#  id         :bigint           not null, primary key
#  owner_id   :integer          not null
#  name       :string           not null
#  public     :boolean          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Server < ApplicationRecord

  # Validations
  
  validates :name, presence: true, uniqueness: { scope: :owner_id}
  validates :public, inclusion: {in:[true, false]}

  after_create :create_general
  after_create :create_owner_membership


  # Assocations

  belongs_to :owner, 
    foreign_key: :owner_id, 
    class_name: :User

  has_many :server_memberships,
    foreign_key: :server_id, 
    class_name: :ServerMembership,
    dependent: :destroy

  has_many :members,
    through: :server_memberships, 
    source: :member

  has_many :channels, 
    foreign_key: :server_id,
    class_name: :Channel,
    dependent: :destroy

  has_many :messages,
    through: :channels, 
    source: :messages

  #Ensure server has general channel
  def create_general 
    Channel.create(server_id: self.id, name: "general")
  end

  #Ensure owner has a membership to his/her own server
  def create_owner_membership
    ServerMembership.create(member_id: self.owner_id, server_id: self.id)
  end

end
