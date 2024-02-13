class CreateDmServers < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_servers do |t|
      t.integer :owner_id 
      t.timestamps
    end
    add_index :dm_servers, :owner_id
  end
end
