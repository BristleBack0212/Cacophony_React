class CreateDmMemberships < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_memberships do |t|
      t.integer :member_id, null: false
      t.integer :dm_server_id, null: false
      t.timestamps
    end

    add_index :dm_memberships, [:member_id, :dm_server_id], unique: true
    # Add forgotten index for messages
    
    add_index :dm_messages, :dm_server_id
    add_index :dm_messages, :author_id
  end
end
