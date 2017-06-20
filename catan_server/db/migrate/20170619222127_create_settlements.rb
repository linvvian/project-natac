class CreateSettlements < ActiveRecord::Migration[5.1]
  def change
    create_table :settlements do |t|
      t.integer :quantity
      t.references :player, foreign_key: true

      t.timestamps
    end
  end
end
