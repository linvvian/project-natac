class CreateSettlements < ActiveRecord::Migration[5.1]
  def change
    create_table :settlements do |t|
      t.integer :left_coordinate
      t.integer :top_coordinate

      t.references :player, foreign_key: true, optional: true
    end
  end
end
