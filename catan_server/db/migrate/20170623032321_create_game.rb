class CreateGame < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.integer :turnCount
      t.string :gameID

      t.timestamps
    end
  end
end
