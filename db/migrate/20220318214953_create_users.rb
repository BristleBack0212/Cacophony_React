class CreateUsers < ActiveRecord::Migration[5.2]
  def change
    create_table :users do |t|
      t.string :username, null: false
      t.string :email, null: false, index: {unique: true}
      t.string :number_tag, null: false
      t.string :session_token, null: false, index: {unique: true}
      t.string :password_digest, null: false
      t.timestamps
    end

    add_index :users, :username
    add_index :users, [:username, :number_tag], unique: true
  end
end
