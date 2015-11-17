require "spec_helper"
require "rake"

describe 'flip stale_features' do
  before :all do
    Rake.application.rake_require "tasks/stale_features"
    Rake::Task.define_task(:environment)
  end

  describe 'flip:stale_features' do
    let :run_rake_task do
      Rake::Task["flip:stale_features"].reenable
      Rake.application.invoke_task "flip:stale_features"
    end

    it "should call stale_features" do
      Flip::FeatureSet.should_receive :stale_features
      run_rake_task
    end
  end
end
