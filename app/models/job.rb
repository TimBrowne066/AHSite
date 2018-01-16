class Job < ApplicationRecord
  validates :title, presence: true
  validates :summary, presence: true
  validates :description, presence: true
end
