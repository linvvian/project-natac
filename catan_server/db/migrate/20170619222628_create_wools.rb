class CreateWools < ActiveRecord::Migration[5.1]
  def change
    create_table :wools do |t|
      t.string :name
      t.integer :quantity

      t.timestamps
    end
  end
end
