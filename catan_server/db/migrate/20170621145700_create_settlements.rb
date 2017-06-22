class CreateSettlements < ActiveRecord::Migration[5.1]
  def change
    create_table :settlements do |t|
      t.integer :x_coordinate
      t.integer :y_coordinate

      t.references :player, foreign_key: true, optional: true
    end
  end
end
