class CreateJobs < ActiveRecord::Migration[5.1]
  def change
    create_table :jobs do |t|
      t.string :title, null: false
      t.string :summary, null: false
      t.string :description, null: false
      t.string :expectations
      t.string :requirements
      t.string :city
      t.string :state
      t.string :zipcode
      t.timestamps
    end
  end
end
