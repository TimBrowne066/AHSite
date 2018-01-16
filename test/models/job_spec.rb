require 'rails_helper'

RSpec.describe Job, type: :model do
  it { should have_valid(:title).when('Junior Software Developer') }
  it { should_not have_valid(:title).when(nil) }

  it { should have_valid(:summary).when('Junior Software Developer job at a new startup in New York City.') }
  it { should_not have_valid(:summary).when(nil) }

  it { should have_valid(:description).when('Competitive salary, opportunity for growth, great benefits, and a relaxed, casual culture.  We make software for baristas or whatever.') }
  it { should_not have_valid(:description).when(nil) }
end
