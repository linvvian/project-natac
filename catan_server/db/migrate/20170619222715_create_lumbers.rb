class CreateLumbers < ActiveRecord::Migration[5.1]
  def change
    create_table :lumbers do |t|
      t.string :name
      t.integer :quantity
      t.references :player, foreign_key: true
      t.timestamps
    end
  end
end
