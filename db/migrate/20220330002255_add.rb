class Add < ActiveRecord::Migration[5.2]
  def change

    add_column :users, :color_id, :integer, null: false
  end
end
