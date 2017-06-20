class CreateGrains < ActiveRecord::Migration[5.1]
  def change
    create_table :grains do |t|
      t.string :name
      t.integer :quantity

      t.timestamps
    end
  end
end
