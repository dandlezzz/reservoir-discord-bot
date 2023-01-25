export default {
  RESERVOIR_ICON:
    "https://cdn.finiliar.com/website/finiliar-logo.gif",
  ALERT_COOLDOWN: 60 * 30, // 30 minute cooldown
  PRICE_CHANGE_OVERRIDE: 0.1, // 10% price change
  ALERT_ENABLED: { listings: true, sales: true, floor: true, bid: true }, // enable alerts
  TRACKED_CONTRACTS: ["0x5a0121a0a21232ec0d024dab9017314509026480"],
  MARKET_DOMAIN: "finiliar.com",
  CHANNEL_IDS: {
    mainChannel: "1005812542142164993",
    listingChannel: "1010246029775478887",
    salesChannel: "926299434285928479",
  },
  ALERT_CONTRACT: "0x5a0121a0a21232ec0d024dab9017314509026480",
  APPLICATION_ID: "1067161068050329732",
  REDIS_HOST: "redis",
  REDIS_PORT: 6379,
};
