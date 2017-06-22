class CreateSettlements < ActiveRecord::Migration[5.1]
  def change
    create_table :settlements do |t|
      t.integer :x_coordinate
      t.integer :y_coordinate

    end
  end
end
