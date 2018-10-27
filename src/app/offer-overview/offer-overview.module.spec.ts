import { OfferOverviewModule } from './offer-overview.module';

describe('OfferOverviewModule', () => {
  let offerOverviewModule: OfferOverviewModule;

  beforeEach(() => {
    offerOverviewModule = new OfferOverviewModule();
  });

  it('should create an instance', () => {
    expect(offerOverviewModule).toBeTruthy();
  });
});
