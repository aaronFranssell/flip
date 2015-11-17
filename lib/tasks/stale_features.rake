namespace 'flip' do
  task stale_features: :environment do
    Flip::FeatureSet.stale_features
  end
end
