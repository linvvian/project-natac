class CreateGrains < ActiveRecord::Migration[5.1]
  def change
    create_table :grains do |t|
      t.string :name
      t.integer :quantity
      t.references :player, foreign_key: true
      t.timestamps
    end
  end
end
