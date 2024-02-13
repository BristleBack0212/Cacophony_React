class CreateDmMessages < ActiveRecord::Migration[5.2]
  def change
    create_table :dm_messages do |t|
      t.integer :dm_server_id, null: false
      t.integer :author_id, null: false
      t.text :body, null: false
      t.timestamps
    end
  end
end
