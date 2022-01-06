<template>
  <div>
    <!-- Header -->
    <div class="bg-white">
      <div class="px-4 pt-16 mx-auto max-w-7xl sm:pt-24 sm:px-6 lg:px-8">
        <h2 class="text-2xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
          Why #delete<span class="text-blue-600">facebook</span>?
        </h2>
        <p class="mt-5 text-base text-gray-500 sm:text-xl">
          Click on the articles below to learn more about why you should delete facebook.
        </p>
      </div>
    </div>

    <!-- Articles -->
    <section class="overflow-x-scroll scrollbars-hidden">
      <div class="container p-5 pb-12 mx-auto md:pt-16 md:pb-20 md:pr-20 md:pl-8 max-w-7xl">
        <div class="flex mx-auto flex-nowrap">
          <a
            v-for="article in links"
            :key="article.url"
            :href="article.url"
            target="_blank"
            class="md:-ml-16 md:first:ml-0"
          >
            <div class="flex w-full">
              <div
                class="relative flex flex-col items-start m-1 transition duration-200 ease-in-out transform bg-white shadow-2xl w-80 rounded-xl md:w-96 md:hover:-translate-x-8 md:hover:-translate-y-4"
              >
                <img
                  class="object-cover object-center w-full bg-gray-400 rounded-t-xl lg:h-48 h-36"
                  :src="article.image"
                  :alt="article.title"
                />
                <div class="h-56 px-6 pb-8">
                  <h4 class="mt-4 text-xl font-semibold line-clamp-2">
                    <span class="">{{ article.title }} </span>
                  </h4>
                  <p class="mt-4 text-base font-normal text-gray-400 leading-relax line-clamp-5">
                    {{ article.description }}
                  </p>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // https://developers.facebook.com/tools/debug/
      links: [
        {
          title: 'The Facebook Files',
          image: 'https://images.wsj.net/im-402599/social',
          url: 'https://www.wsj.com/articles/the-facebook-files-11631713039',
          description:
            'Facebook knows, in acute detail, that its platforms are riddled with flaws but hasn’t fixed them. That’s a key finding of a Journal series that launched this week, based on an array of internal company documents. Read all the stories here.',
        },
        {
          title: 'Facebook says Instagram is not ‘toxic for teens,’ despite damning WSJ report',
          image:
            'https://cdn.vox-cdn.com/thumbor/AhEDh8cXLzPzD8FmGa8EbJmzzbs=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/19228500/acastro_190919_1777_instagram_0001.0.jpg',
          url:
            'https://www.theverge.com/2021/9/26/22695629/facebook-says-instagram-is-not-toxic-for-teens-despite-damning-wsj-report',
          description: 'The PR push comes days ahead of a Senate hearing',
        },
        {
          title: 'Something Weird Is Happening on Facebook',
          image:
            'https://i0.wp.com/www.politicalorphans.com/wp-content/uploads/2021/09/sample4.png?fit=710%2C271&ssl=1',
          url: 'https://www.politicalorphans.com/something-weird-is-happening-on-facebook/',
          description:
            'Someone appears to be pouring enormous energy and effort into a data collection project aimed at building personality profiles from social media interaction…again',
        },
        {
          title: 'WhatsApp Has Shared Your Data With Facebook for Years, Actually',
          image:
            'https://media.wired.com/photos/5ff5dc70abb4491ff39c2909/191:100/w_1280,c_limit/Security_WhatsApp_1272032893.jpg',
          url: 'https://www.wired.com/story/whatsapp-facebook-data-share-notification/',
          description:
            "A pop-up notification has alerted the messaging app's users to a practice that's been in place since 2016.",
        },
        {
          title: 'How Facebook Undermines Privacy Protections for Its 2 Billion WhatsApp Users',
          image:
            'https://img.assets-c3.propublica.org/images/articles/FF_01.jpeg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=630&imgixProfile=propublicaAssets&q=90&w=1200&s=99e189841db335380d56fc063ffa16b6',
          url:
            'https://www.propublica.org/article/how-facebook-undermines-privacy-protections-for-its-2-billion-whatsapp-users',
          description:
            'WhatsApp assures users that no one can see their messages — but the company has an extensive monitoring operation and regularly shares personal information with prosecutors.',
        },
        {
          title:
            "In 2019, Almost All of Facebook's Top Christian Pages Were Run By Foreign Troll Farms",
          image: 'https://www.relevantmagazine.com/wp-content/uploads/2021/09/facebook2.jpg',
          url:
            'https://www.relevantmagazine.com/culture/tech-gaming/almost-all-of-facebooks-top-christian-pages-are-run-by-foreign-troll-farms/',
          description:
            "In 2019, 19 of Facebook's top 20 pages for American Christians were run by Eastern European troll farms overseas, internal documents leaked to MIT",
        },
        {
          title: 'Academics ask for laws to open the social media black box',
          image: 'https://regmedia.co.uk/2019/01/25/shutterstock_facebook_thumbs_down.jpg',
          url: 'https://www.theregister.com/2021/09/29/facebook_research_congress/',
          description:
            'Boffins tell US lawmakers social media titans cannot be trusted to police themselves',
        },
        {
          title:
            "Leaked Facebook docs show the company saw pre-teens as an 'untapped' audience and wanted to 'leverage playdates,' The Wall Street Journal reports",
          image: 'https://i.insider.com/61543d76b414c1001862dc3b?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/wsj-facebook-docs-show-company-saw-preteens-as-untapped-market-2021-9',
          description:
            'The documents obtained by The Wall Street Journal show that Facebook feared it was losing market share among teens and tweens to Snapchat and TikTok.',
        },
        {
          title: 'Facebook is an out-of-control system bent on surviving at all costs',
          image: 'https://i.insider.com/6154e6892fb46b0019beaf54?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/facebook-out-of-control-wall-street-journal-new-york-times-2021-9',
          description:
            "Two big recent exposés about the platform have shown exactly why we should all be on guard by Facebook's 'survival at all cost' strategy, writes Noam Cohen.",
        },
        {
          title:
            'Facebook used Big Tobacco playbook to exploit teens and children, senators say at hearing after WSJ series',
          image:
            'https://image.cnbcfm.com/api/v1/image/106716316-16009772052020-09-24t194520z_2094849200_rc275j9hfyil_rtrmadp_0_usa-election-facebook-russia.jpeg?v=1617637691',
          url:
            'https://www.cnbc.com/2021/09/30/senators-say-facebook-used-big-tobacco-playbook-to-exploit-kids.html',
          description:
            "Facebook's Antigone Davis, global head of safety, was grilled Thursday at a Senate subcommittee hearing about Instagram's impact on teens' mental health.",
        },
        {
          title:
            "'It has really taken a dive': How misinformation is changing Facebook community groups",
          image:
            'https://live-production.wcms.abc-cdn.net.au/aa0ad394289297b694c87ebb01636596?impolicy=wcms_crop_resize&cropH=2813&cropW=5000&xPos=0&yPos=321&width=862&height=485',
          url:
            'https://www.abc.net.au/news/2021-10-02/facebook-regional-admins-say-misinformation-hurting-communities/100460662',
          description:
            "Facebook group admins in regional Australia say misinformation is fracturing previously positive online communities and affecting their towns' sense of togetherness.",
        },
        {
          title: 'Whistle-Blower to Accuse Facebook of Contributing to Jan. 6 Riot, Memo Says',
          image:
            'https://static01.nyt.com/images/2021/10/03/business/02facebook-clegg-print/02facebook-clegg-facebookJumbo.jpg',
          url: 'https://www.nytimes.com/2021/10/02/technology/whistle-blower-facebook-memo.html',
          description:
            'In an internal memo meant to pre-empt a “60 Minutes” interview, Facebook defended itself and said that social media was not a primary cause of polarization.',
        },
        {
          title:
            'Whistleblower: Facebook is misleading the public on progress against hate speech, violence, misinformation',
          image:
            'https://cbsnews3.cbsistatic.com/hub/i/r/2021/10/03/cab96739-52c1-4a35-9e4b-3f809f647e06/thumbnail/1200x630/fa90f91f0dbd9f2c2c9f992ba6ca3a2c/facebookarticle.jpg',
          url:
            'https://www.cbsnews.com/news/facebook-whistleblower-frances-haugen-misinformation-public-60-minutes-2021-10-03/',
          description:
            'Frances Haugen says in her time with Facebook she saw, "conflicts of interest between what was good for the public and what was good for Facebook." Scott Pelley reports.',
        },
        {
          title: 'jason@calacanis.com on Twitter',
          image: 'https://pbs.twimg.com/profile_images/1296864605269000192/tRBPfyJN_400x400.jpg',
          url: 'https://twitter.com/Jason/status/1444865079741087752',
          description:
            '“the @60minutes piece was devastating for $FB expect investigations, resignations, & stock annihilation over the coming weeks/months Complete confirmation of everything we expected: their greed & lust for growth built a Frankenstein they can’t control.”',
        },
        {
          title: 'Edward Snowden on Twitter',
          image: 'https://pbs.twimg.com/profile_images/648888480974508032/66_cUYfj_400x400.jpg',
          url: 'https://twitter.com/Snowden/status/1445090556388859904',
          description:
            "Facebook-owned Whatsapp being down is a reminder that you and your friends should probably be using a more private, non-profit alternative like @Signalapp anyway (or another open-source app of your choice). It's just as free, and takes like 30 seconds to switch. #facebookdown",
        },
        {
          title: 'Data of Over 1.5 Billion Facebook Users Sold on Hacker Forum',
          image:
            'https://www.privacyaffairs.com/wp-content/uploads/2021/10/How-Facebook-Collect-Informations-2.jpeg',
          url: 'https://www.privacyaffairs.com/facebook-data-sold-on-hacker-forum/',
          description:
            'Data on over 1.5 billion Facebook users is being sold on a hacking-related forum, enabling cybercriminals advertisers to target users.',
        },
        {
          title: 'Facebook whistleblower says Zuckerberg knows site harms children',
          image:
            'https://static.independent.co.uk/2021/10/05/16/GettyImages-1235711670.jpg?width=1200&auto=webp&quality=75',
          url:
            'https://www.independent.co.uk/news/world/americas/us-politics/facebook-whistleblower-hearing-frances-haugen-b1932762.html',
          description:
            'Facebook whistleblower says company has hid information about dangers of its platforms from public',
        },
        {
          title: 'Whistleblower tells Congress that Facebook products harm kids and democracy',
          image:
            'https://media.npr.org/assets/img/2021/10/05/gettyimages-1235710416_wide-a56123ef9e831fb8d3f831a67f38fb469b932f6e.jpg?s=1400',
          url:
            'https://www.npr.org/2021/10/05/1043207218/whistleblower-to-congress-facebook-products-harm-children-and-weaken-democracy',
          description:
            'A former Facebook employee compared the social network to Big Tobacco at a Senate hearing on Tuesday, saying the company has hidden what it knows about the problems its products cause.',
        },
        {
          title: "Facebook's new whistleblower is renewing scrutiny of the social media giant",
          image:
            'https://media.npr.org/assets/img/2021/10/03/ap21277006862704_wide-9dc90aeba6346dd608af64b20719a5d2ac8f8051.jpg?s=1400',
          url:
            'https://www.npr.org/2021/10/04/1042921981/facebook-whistleblower-renewing-scrutiny-of-social-media-giant',
          description:
            "Facebook could be facing its biggest scandal yet as a former employee comes forward to expose some of the company's secrets.",
        },
        {
          title: 'Facebook harms children and weakens democracy: ex-employee',
          image:
            'https://ichef.bbci.co.uk/news/1024/branded_news/6533/production/_120870952_gettyimages-1235714396.jpg',
          url: 'https://www.bbc.com/news/world-us-canada-58805965',
          description:
            'Mark Zuckerberg denies claims, heard in the US Senate, that Facebook puts profits before people.',
        },
        {
          title: 'Facebook runs the coward’s playbook to smear the whistleblower',
          image:
            'https://cdn.vox-cdn.com/thumbor/FpxzbuPFr8BsrMVJ3FpOKz1ikNo=/0x0:2040x1068/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22733187/acastro_072121_4674_zuckerberg_3.jpg',
          url:
            'https://www.theverge.com/2021/10/5/22711182/facebook-whistleblower-smear-pr-response',
          description:
            'Smears didn’t work for Big Tobacco, but Facebook’s trotting them out anyway.',
        },
        {
          title: 'Facebook is nearing a reputational point of no return',
          image:
            'https://www.economist.com/img/b/1280/720/90/sites/default/files/images/print-edition/20211009_LDD002_0.jpg',
          url:
            'https://www.economist.com/leaders/2021/10/09/facebook-is-nearing-a-reputational-point-of-no-return',
          description: 'The problem starts at the top',
        },
        {
          title: 'Facebook Banned Me for Life Because I Help People Use It Less',
          image:
            'https://compote.slate.com/images/814f2912-cf45-4865-9538-639d858a93a6.jpeg?width=780&height=520&rect=5184x3456&offset=0x0',
          url:
            'https://slate.com/technology/2021/10/facebook-unfollow-everything-cease-desist.html',
          description: 'Facebook’s behavior isn’t just anti-competitive; it’s anti-consumer.',
        },
        {
          title: "Over 1.5 billion Facebook users' personal data found for sale on hacker forum",
          image:
            'https://www.techrepublic.com/a/hub/i/r/2021/10/06/fe896fe1-20f8-4127-b178-ff8aef715a5c/thumbnail/770x578/15fca6f9262fea7a78ae6e2cfc3614a9/shutterstock-1152141662.jpg',
          url:
            'https://www.techrepublic.com/article/over-1-5-billion-facebook-users-personal-data-found-for-sale-on-hacker-forum/',
          description:
            "Unrelated to other recent problems Facebook has had, this particular batch of data was scraped from profiles, meaning it's publicly available knowledge. That doesn't stop it from being dangerous.",
        },
        {
          title: 'Facebook’s role in Myanmar and Ethiopia under new scrutiny',
          image:
            'https://i.guim.co.uk/img/media/9037e0b7309708102b85ca1363d6204c3284007d/0_0_3422_2054/master/3422.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctZGVmYXVsdC5wbmc&enable=upscale&s=923adf57f800bea77b513dedd7b11f6c',
          url:
            'https://www.theguardian.com/technology/2021/oct/07/facebooks-role-in-myanmar-and-ethiopia-under-new-scrutiny',
          description:
            'Whistleblower Frances Haugen adds to long-held concerns that social media site is fuelling violence and instability',
        },
        {
          title: 'Facebook is a menace to children. Maybe Congress will finally take action.',
          image: 'https://i.insider.com/61609d8cd62be70019c02d2b?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/congress-might-regulate-facebook-because-of-children-2021-10',
          description:
            'Whistleblower Frances Haugen testified that Facebook knew Instagram hurt children. See why the hearings might force Congress to regulate the company.',
        },
        {
          title: 'Facebook is ‘biased against facts’, says Nobel prize winner',
          image:
            'https://i.guim.co.uk/img/media/e3b9563ba29773201eb4c7ceb9e21fa4e63f7b35/478_545_2529_1518/master/2529.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdG8tZGVmYXVsdC5wbmc&enable=upscale&s=5c202d8877eddd262f00dec9d95a96ff',
          url:
            'https://www.theguardian.com/technology/2021/oct/09/facebook-biased-against-facts-nobel-peace-prize-winner-philippines-maria-ressa-misinformation',
          description:
            'Philippines journalist Maria Ressa says social media firm is threat to democracy and failing to halt spread of misinformation',
        },
        {
          title:
            'Facebook bans, sends cease-and-desist letter to developer of Unfollow Everything extension',
          image:
            'https://static.techspot.com/images2/news/bigimage/2021/06/2021-06-30-image-10.jpg',
          url:
            'https://www.techspot.com/news/91650-facebook-bans-sends-cease-desist-letter-developer-unfollow.html',
          description:
            'Louis Barclay, creator of the Unfollow Everything browser extension that lets users unfollow—not unfriend—all their friends, groups, and pages simultaneously (rather than individually), writes that his program...',
        },
        {
          title:
            'Facebook says it will ban sales of the Amazon rainforest after an investigation found plots of land were illegally sold on the platform',
          image: 'https://i.insider.com/5f46cb43cd2fec00296a464c?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/facebook-block-illegal-sales-of-amazon-rainforest-on-marketplace-bbc-2021-10',
          description:
            'A BBC investigation found illegal sales of parts of the Amazon rainforest on Facebook Marketplace. Eight months later, Facebook is banning the sales.',
        },
        {
          title:
            'Facebook permanently banned a developer after he made an app to let users delete their news feed',
          image: 'https://i.insider.com/6160481a5ae4fe0018a710b8?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/facebook-bans-unfollow-everything-developer-delete-news-feed-2021-10',
          description:
            'The developer Louis Barclay, who created Unfollow Everything, told Insider he was scared and anxious after receiving a cease-and-desist letter.',
        },
        {
          title:
            "A second Facebook whistleblower says she's willing to testify before Congress and that she's shared documents with a US law agency",
          image: 'https://i.insider.com/616551240a77a900187bb026?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/facebook-whistleblower-sophie-zhang-willing-to-testify-congress-2021-10',
          description:
            "The former employee Sophie Zhang has criticized what she believed was Facebook's failure to stop authoritarian regimes from abusing its platform.",
        },
        {
          title: 'Most Canadians believe Facebook harms their mental health, survey suggests',
          image:
            'https://www.theglobeandmail.com/resizer/HtepXZmj5InbQeWKuxVzvqzoyMw=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/FFQQDNIMJRK4HA5P4MFD3NAK44.jpg',
          url:
            'https://www.theglobeandmail.com/canada/article-most-canadians-believe-facebook-harms-their-mental-health-survey-2/',
          description:
            'Forty per cent of those who responded to an online survey by Leger and the Association for Canadian Studies said they had a negative opinion of Facebook',
        },
        {
          title: 'Facebook is trapped in a PR nightmare of their own making',
          image: 'https://i.insider.com/6165e3d9991f6b0018656f3d?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/facebook-pr-press-problems-journalism-apple-tesla-media-2021-10',
          description:
            "Facebook's lack of willingness to maintain healthy relationships with the media has now bitten it on the backside.",
        },
        {
          title:
            'Facebook’s Whistleblower Said the Company Does Too Little to Protect Users. Most of the Public Agrees - Morning Consult',
          image:
            'https://assets.morningconsult.com/wp-uploads/2021/10/18132004/Facebook-Congress-GettyImages-1227829729-scaled.jpg',
          url:
            'https://morningconsult.com/2021/10/19/facebook-congress-social-media-actions-polling/',
          description:
            'Following the testimony of former Facebook Inc. employee and whistleblower Frances Haugen, most of the public said in a recent Morning Consult poll that the company does not do enough to protect user safety and supports both congressional and corporate actions to remedy the situation.',
        },
        {
          title: 'Facebook is planning to rebrand the company with a new name',
          image:
            'https://cdn.vox-cdn.com/thumbor/-hPi5uYquEQKLSXNq2vMrmjx_Ds=/0x215:3000x1786/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/22732920/acastro_072121_4674_zuckerberg.jpg',
          url:
            'https://www.theverge.com/2021/10/19/22735612/facebook-change-company-name-metaverse',
          description: 'The tech giant wants to be known for more than social media’s ills.',
        },
        {
          title:
            'How Facebook neglected the rest of the world, fueling hate speech and violence in India',
          image:
            'https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/VVYDKEN2IJCH3JY5I6NOABGMEQ.jpg&w=1440',
          url:
            'https://www.washingtonpost.com/technology/2021/10/24/india-facebook-misinformation-hate-speech/',
          description:
            'A trove of internal documents show Facebook didn’t invest in key safety protocols in the company’s largest market.',
        },
        {
          title: 'fasterthanlime 🌌 on Twitter',
          image: 'https://pbs.twimg.com/profile_images/936324358649405440/kRROV3kf_400x400.jpg',
          url: 'https://twitter.com/fasterthanlime/status/1452053940024057857',
          description:
            "🔒 google has a secret deal with facebook called 'Jedi Blue' that they knew was so illegal that it has a whole section describing how they'll cover for each other if anyone finds out - google appears to have a team called gTrade that is wholly dedicated to ad market manipulation",
        },
        {
          title: 'jack⚡️ on Twitter',
          image: 'https://pbs.twimg.com/profile_images/1115644092329758721/AFjOr-K8_400x400.jpg',
          url: 'https://twitter.com/jack/status/1450667602703904768',
          description: 'NARRATOR He was. https://t.co/U4XnXCmeeG',
        },
        {
          title: 'Facebook settles claims it discriminated against US workers',
          image: 'https://regmedia.co.uk/2021/10/19/shutterstock_laughing_zuckerberg.jpg',
          url: 'https://www.theregister.com/2021/10/19/facebook_hiring_discrimination/',
          description: 'And that $14.25m is supposed to be some kind of record',
        },
        {
          title: 'Alarming new report shows Facebook misinformation still spreading like wildfire',
          image: 'https://thehill.com/sites/default/files/ca._facebook_gettyimages-1344800162.jpg',
          url:
            'https://thehill.com/changing-america/well-being/prevention-cures/577854-alarming-new-report-shows-facebook',
          description: 'Study takes a close look at one source of COVID-19 misinformation.',
        },
        {
          title: "Google 'colluded' with Facebook to bypass Apple privacy",
          image: 'https://regmedia.co.uk/2019/07/08/shutterstock_1169319226.jpg',
          url: 'https://www.theregister.com/2021/10/22/google_facebook_antitrust_complaint/',
          description:
            'Amended Texas complaint alleges backroom efforts to maintain ad dominance and more',
        },
        {
          title: 'The Facebook Papers: What you need to know about the trove of insider documents',
          image:
            'https://media.npr.org/assets/img/2021/10/25/gettyimages-944827400_wide-0a9da5d30784264d40bdb63fb36b7837c19ee5c2.jpg?s=1400',
          url:
            'https://www.npr.org/2021/10/25/1049015366/the-facebook-papers-what-you-need-to-know',
          description:
            "'We've been fueling this fire for a long time and we shouldn't be surprised it's now out of control,' an employee reportedly wrote on an internal message board.",
        },
        {
          title:
            "Whistleblower Frances Haugen says Facebook's investment in the 'metaverse' shows how its priorities are all wrong",
          image: 'https://i.insider.com/6177d1e1da7ba4001804e187?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/facebook-metaverse-frances-haugen-whistleblower-shocked-by-investment-2021-10',
          description:
            "Facebook plans to hire 10,000 people to build the 'metaverse,' and Frances Haugen told UK lawmakers it should invest the money in safety instead.",
        },
        {
          title: 'Security Researcher Finds Facebook App Tracking iPhone Movements',
          image:
            'https://thumbor.forbes.com/thumbor/fit-in/1200x0/filters%3Aformat%28jpg%29/https%3A%2F%2Fspecials-images.forbesimg.com%2Fimageserve%2F6173afb3af9ccadd01b0c7f2%2F0x0.jpg%3FcropX1%3D563%26cropX2%3D2308%26cropY1%3D1272%26cropY2%3D2365',
          url:
            'https://www.forbes.com/sites/zakdoffman/2021/10/23/apple-iphone-users-delete-facebook-app-after-new-tracking-warning/?sh=1f318ce25930',
          description:
            "New warning as Facebook app is suddenly caught secretly 'spying' on millions of iPhone users…",
        },
        {
          title: 'Zuckerberg Announces Fantasy World Where Facebook Is Not a Horrible Company',
          image:
            'https://video-images.vice.com/articles/617aeacd64922e009a40e833/lede/1635445453903-screen-shot-2021-10-28-at-10729-pm.png?image-resize-opts=Y3JvcD0xeHc6MC45NjQ4eGg7MHh3LDB4aCZyZXNpemU9MTIwMDoqJnJlc2l6ZT0xMjAwOio',
          url:
            'https://www.vice.com/en/article/qjb485/zuckerberg-facebook-new-name-meta-metaverse-presentation',
          description:
            'Facebook’s new name is “Meta,” and its new mission is to invent a ‘metaverse’ that will make us all forget what it’s done to our existing reality.',
        },
        {
          title: 'Facebook to change name to Meta and build VR fantasy world',
          image: 'https://regmedia.co.uk/2018/09/28/shutterstock_zuckerberg_oh_no.jpg',
          url: 'https://www.theregister.com/2021/10/29/zuckerberg_meta_facebook/',
          description: 'His social network has Meta-stasized',
        },
        {
          title: 'The metaverse is bullshit',
          image: 'https://cdn.mos.cms.futurecdn.net/XXyqyRHq99sUfr8o3KUo88-1200-80.jpg',
          url: 'https://outline.com/DUdr8Y',
          description:
            "You're not losing your mind: it really does just sound like a worse version of the internet.",
        },
        {
          title: 'Nobody Can See Into Facebook',
          image:
            'https://cdn.theatlantic.com/thumbor/maw-AfXtYQ7fbsTiCxLG7C_KGEE=/0x43:2000x1085/960x500/media/img/mt/2021/10/SeeInsideFB2/original.jpg',
          url:
            'https://www.theatlantic.com/ideas/archive/2021/10/facebook-oversight-data-independent-research/620557/',
          description:
            'Imagine if automakers were the only ones who could test their cars—and they kept the results secret.',
        },
        {
          title:
            "Facebook employees questioned apparent restrictions on Palestinian activist's account: Documents",
          image:
            'https://s.abcnews.com/images/International/facebook-suppression-instagram-activism-israel-palestine-mohammed-el-kurd-02-gty-llr-211027_1635383912655_hpMain_16x9_992.jpg',
          url:
            'https://abcnews.go.com/Technology/facebook-employees-questioned-apparent-restrictions-palestinian-activists-account/story?id=80824995',
          description: 'A congressional staffer provided the redacted documents to news outlets.',
        },
        {
          title: 'As teens left Facebook, company planned to lure 6-year-olds, documents show',
          image:
            'https://cdn.arstechnica.net/wp-content/uploads/2021/11/GettyImages-1211391724-760x380.jpg',
          url:
            'https://arstechnica.com/tech-policy/2021/11/facebook-wanted-to-hook-6-year-olds-with-new-apps-documents-show/',
          description: 'Internal posts and job listings show plans were moving forward.',
        },
        {
          title: 'Facebook documents reveal company targeted children as young as 6',
          image:
            'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-10/211028-facebook-al-1044-e730de.jpg',
          url:
            'https://www.nbcnews.com/tech/social-media/facebook-documents-reveal-company-targeted-children-young-6-rcna4021',
          description: 'Children as young as six were the next business target for Facebook',
        },
        {
          title: 'Zuckerberg’s Meta Endgame Is Monetizing All Human Behavior',
          image:
            'https://video-images.vice.com/articles/61802e0ed5713d00937af2a0/lede/1635791007487-screen-shot-2021-11-01-at-22311-pm.png?image-resize-opts=Y3JvcD0xeHc6MC44NjczeGg7MHh3LDAuMDA4MnhoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg',
          url:
            'https://www.vice.com/en/article/88g9vv/zuckerbergs-meta-endgame-is-monetizing-all-human-behavior',
          description:
            'Exploiting data to manipulate human behavior has always been Facebook’s business model. The metaverse will be no different.',
        },
        {
          title: 'Meta to continue use of facial recognition technology | AppleInsider',
          image: 'https://photos5.appleinsider.com/gallery/45466-88475-211103-Meta-xl.jpg',
          url:
            'https://appleinsider.com/articles/21/11/04/meta-to-continue-use-of-facial-recognition-technology',
          description:
            "Facebook this week announced that it will no longer deploy facial recognition technologies on its platform, but the social network's parent company, Meta, said that the commitment does not apply to its metaverse products",
        },
        {
          title:
            "'The Big Tobacco of Our Generation': Study Shows Huge Scale of Facebook Climate Lies",
          image:
            'https://www.commondreams.org/sites/default/files/styles/social_share_image/public/2021-11/GettyImages-1236343628-facebook-capitol.jpg?h=b27a87fd&itok=A8hjHsmJ',
          url:
            'https://www.commondreams.org/news/2021/11/04/big-tobacco-our-generation-study-shows-huge-scale-facebook-climate-lies',
          description:
            'The flood of disinformation unleashed by Mark Zuckerberg and Facebook is drowning audiences around the world.',
        },
        {
          title:
            'Mark Zuckerberg downloaded and used a photo app that Facebook later cloned and crushed, antitrust lawsuit claims',
          image: 'https://i.insider.com/6154e6892fb46b0019beaf54?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/facebook-antitrust-lawsuit-cloned-crushed-phhhoto-photo-app-2021-11',
          description:
            'The founders of the photo-looping app Phhhoto say Facebook strung them along with the promise of a partnership that never materialized.',
        },
        {
          title: 'Facebook reportedly is aware of the level of ‘problematic use’ among its users',
          image:
            'https://cdn.vox-cdn.com/thumbor/RjpjdR4FyTBVgpn1mvkThpnF29Y=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/12793301/acastro_180828_1777_facebook_0001.0.jpg',
          url:
            'https://www.theverge.com/2021/11/6/22766935/facebook-meta-aware-problematic-use-addiction-wellbeing',
          description: 'One in eight Facebook users reported "compulsive" social media use',
        },
        {
          title: 'Why Facebook’s Metaverse Is Dead on Arrival',
          image:
            'https://pyxis.nymag.com/v1/imgs/1ac/697/a8c8649a5641bfdb5707d690a577dea051-zuckberg.1x.rsocial.w1200.jpg',
          url:
            'https://nymag.com/intelligencer/2021/11/why-facebooks-metaverse-is-dead-on-arrival.html',
          description:
            'Scott Galloway thinks Mark Zuckerberg is exactly the wrong person to build an alternate reality.',
        },
        {
          title: 'CNN Poll: Three out of four adults think Facebook is making society worse',
          image: 'https://cdn.cnn.com/cnnnext/dam/assets/190903150412-facebook-app-super-tease.jpg',
          url: 'https://www.cnn.com/2021/11/10/business/cnn-poll-facebook/index.html',
          description:
            "Roughly three-quarters of adults believe Facebook is making American society worse, a new CNN poll conducted by SSRS finds, with about half saying they know somebody who was persuaded to believe in a conspiracy theory because of the site's content.",
        },
        {
          title: 'Restore Net Neutrality, Or Facebook Will Dominate The Internet Forever',
          image:
            'https://video-images.vice.com/articles/6193e37da2346a009b6ed57c/lede/1637088927723-gettyimages-892389140.jpeg?image-resize-opts=Y3JvcD0xeHc6MC44NDI1eGg7MHh3LDAuMTU3NXhoJnJlc2l6ZT0xMjAwOiomcmVzaXplPTEyMDA6Kg',
          url:
            'https://www.vice.com/en/article/epxndw/restore-net-neutrality-or-facebook-will-dominate-the-internet-forever',
          description:
            'Without a functioning FCC, it’s only a matter of time before Big Tech and Big Telecom team up to screw us all.',
        },
        {
          title: 'Facebook’s “Metaverse” Must Be Stopped',
          image:
            'https://images.jacobinmag.com/wp-content/uploads/2021/11/16152135/1280px-Mark_Zuckerberg_F8_2018_Keynote.jpeg',
          url:
            'https://jacobinmag.com/2021/11/facebook-metaverse-mark-zuckerberg-play-to-earn-surveillance-tech-industry',
          description:
            "Facebook founder Mark Zuckerberg's metaverse is no utopian vision — it's another opportunity for Big Tech to colonize our lives in the name of profit.",
        },
        {
          title: 'JRE #1736 - Tristan Harris & Daniel Schmachtenberger',
          image: 'https://i.scdn.co/image/ab6765630000ba8a34e2c63d3b0859725eaf86c5',
          url: 'https://open.spotify.com/episode/2LNwwgJqOMKHOqdvwmLxqd',
          description:
            "Listen to this episode from The Joe Rogan Experience on Spotify. Tristan Harris is a former Google design ethicist, co-founder and president of the Center for Humane Technology, and co-host of the Center for Humane Technology’s 'Your Undivided Attention' podcast with Aza Raskin. Daniel Schmachtenb...",
        },
        {
          title:
            "The CEO of cosmetics retailer Lush says he's 'happy to lose' $13 million by deleting Facebook, TikTok, Snapchat accounts over teen mental-health harms",
          image: 'https://i.insider.com/61a15eb31ca528001811751b?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/lush-ceo-happy-to-lose-13m-deleting-social-media-accounts-2021-11',
          description:
            'Cosmetics company Lush made waves by permanently shutting down its accounts on many of the biggest social media accounts on Black Friday.',
        },
        {
          title:
            "Meta's acquisition of Giphy is set to be blocked by an antitrust regulator, report says",
          image: 'https://i.insider.com/61a4bbb4ee979500188412e7?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/meta-facebook-giphy-acquisition-set-to-get-blocked-cma-2021-11',
          description:
            'The UK regulator issued a provisional finding in August which said the acquisition was anti-competitive.',
        },
        {
          title:
            'A leaked internal Facebook survey shows employees are losing confidence in leadership and fewer than half intend to stay',
          image: 'https://i.insider.com/6198216ba0817900199c0d80?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/internal-facebook-survey-shows-staff-losing-confidence-in-leadership-meta-2021-11',
          description:
            'Facebook, now called Meta, measures employee sentiment in an internal "Pulse" survey twice a year. We viewed the latest results.',
        },
        {
          title: 'The metaverse is bullshit',
          image: 'https://cdn.mos.cms.futurecdn.net/XXyqyRHq99sUfr8o3KUo88-1200-80.jpg',
          url: 'https://www.pcgamer.com/the-metaverse-is-bullshit/',
          description:
            "You're not losing your mind: it really does just sound like a worse version of the internet.",
        },
        {
          title: 'Facebook sold ads comparing vaccine to Holocaust',
          image:
            'https://cdn.cnn.com/cnnnext/dam/assets/210202130244-20210202-facebook-antivax-groups-illustration-super-tease.jpg',
          url:
            'https://www.cnn.com/2021/12/02/tech/facebook-vaccine-holocaust-misinformation/index.html',
          description:
            "Facebook has sold ads promoting anti-vaccine messages, comparing the US government's response to Covid-19 to Nazi Germany, casting doubt on the result of the 2020 election, and even pushing political violence.",
        },
        {
          title: 'Meta sued in excess of $150 billion for its role in Rohingya genocide | ZDNet',
          image:
            'https://www.zdnet.com/a/img/resize/ccdfb966129d78d55553cc688b52a427857e3009/2021/12/07/0383ff94-c076-4445-ac47-c351ce8d4cd9/gettyimages-1236816350.jpg?width=770&height=578&fit=crop&auto=webp',
          url:
            'https://www.zdnet.com/article/meta-slapped-with-two-class-action-lawsuits-worth-in-excess-of-150b-for-its-role-in-rohingya-genocide/',
          description:
            'Facebook has been accused of using algorithms that amplified hate speech and failing to take down specific posts inciting violence against the Rohingya people.',
        },
        {
          title:
            'The metaverse could let Silicon Valley track your facial expressions, blood pressure, and your breathing rates — showing exactly why our internet laws need updating',
          image: 'https://i.insider.com/6183ae8a23745d001824f811?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/metaverse-silicon-valley-tech-data-collection-regulation-laws-need-updating-2021-12',
          description:
            'Big Tech could gain much more personal data on you in the immersive metaverse — and use it to inform its algorithms and advertising partners.',
        },
        {
          title:
            "More than 300 scientists have told Mark Zuckerberg they want access to Meta's internal research on child and teen mental health because it doesn't meet scientific standards",
          image: 'https://i.insider.com/608c11b634af8d001859a210?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/mark-zuckerberg-meta-open-letter-kids-mental-health-300-scientists-2021-12',
          description:
            "Zuckerberg has a 'moral obligation' to align Meta's child and teen mental health research with established scientific standards, the letter says.",
        },
        {
          title: 'Her Instagram Handle Was ‘Metaverse.’ Last Month, It Vanished.',
          image:
            'https://static01.nyt.com/images/2021/12/13/world/13oz-meta-1/13oz-meta-1-facebookJumbo.jpg',
          url: 'https://www.nytimes.com/2021/12/13/technology/instagram-handle-metaverse.html',
          description:
            'Five days after Facebook changed its name to Meta, an Australian artist found herself blocked, with seemingly no recourse, from an account documenting nearly a decade of her life and work.',
        },
        {
          title: 'Open letter from The BMJ to Mark Zuckerberg',
          image: '',
          url: 'https://www.bmj.com/content/375/bmj.n2635/rr-80',
          description:
            'Article Related content Article metrics Rapid responses Response Rapid Response: Open letter from The BMJ to Mark Zuckerberg Dear Mark Zuckerberg, We are Fiona Godlee and Kamran Abbasi, editors of The BMJ, one of the world’s oldest and most influential general medical journals. We are writing to r...',
        },
        {
          title: 'Metaverse! Sign Your Life Away Now!',
          image: 'https://i.ytimg.com/vi/gCegS3jxOU4/maxresdefault.jpg',
          url: 'https://www.youtube.com/watch?v=gCegS3jxOU4',
          description:
            'To join Zion today and to find out more go to https://getzion.com/jpCheck Out My Merch Here - https://awakenwithjp.comTake a stand against censorship. Join m...',
        },
        {
          title:
            "Facebook's reputation is so bad, the company must pay even more now to hire and retain talent. Some are calling it a 'brand tax' as tech workers fear a 'black mark' on their careers.",
          image: 'https://i.insider.com/61bbb333df9da600189e4ef8?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/facebook-pays-brand-tax-hire-talent-fears-career-black-mark-2021-12',
          description:
            'At the group-director and VP level, Facebook staff are getting $3 million to $6 million in restricted stock units each year, one recruiter said.',
        },
        {
          title: 'Buying Influence: How China Manipulates Facebook and Twitter',
          image:
            'https://static01.nyt.com/images/2021/12/19/business/china-influencer-promo/china-influencer-promo-facebookJumbo.jpg',
          url:
            'https://www.nytimes.com/interactive/2021/12/20/technology/china-facebook-twitter-influence-manipulation.html',
          description:
            'New documents detail how Chinese officials tap private businesses for online information campaigns, offering a rare glimpse into how China’s vast bureaucracy works to spread propaganda online.',
        },
        {
          title:
            'After the Facebook whistleblower came forward, the company reportedly tried to discredit her reputation among politicians',
          image: 'https://i.insider.com/61cc91a90a55570019619505?width=1200&format=jpeg',
          url:
            'https://www.businessinsider.com/facebook-reportedly-used-lobbyists-to-divide-politicians-as-defense-2021-12',
          description:
            'In October, Frances Haugen exposed major issues at the social media giant. Then, company lobbyists smeared her name on Capitol Hill, the Wall Street Journal reports.',
        },
        {
          title:
            "Facebook Said My Article Was 'False Information.' Now the Fact-Checkers Admit They Were Wrong.",
          image:
            'https://d2eehagpk5cl65.cloudfront.net/img/q60/uploads/2021/12/Artboard-1-1024x576.png',
          url:
            'https://reason.com/2021/12/29/facebook-masks-false-information-science-feedback-wrong-covid/',
          description:
            "While this is a problem, it's not one that scrapping Section 230 would solve.",
        },
        {
          title:
            'Facebook Hosted Surge of Misinformation and Insurrection Threats in Months Leading Up to Jan. 6 Attack, Records Show',
          image:
            'https://img.assets-d.propublica.org/v5/images/20220103_FB-Jan6-2_SS.jpg?crop=focalpoint&fit=crop&fp-x=0.5&fp-y=0.5&h=630&imgixProfile=propublicaAssetsV5&q=90&w=1200&s=8445ed489764cba00c18e00b5b5d202a',
          url:
            'https://www.propublica.org/article/facebook-hosted-surge-of-misinformation-and-insurrection-threats-in-months-leading-up-to-jan-6-attack-records-show',
          description:
            'A ProPublica/Washington Post analysis of Facebook posts, internal company documents and interviews, provides the clearest evidence yet that the social media giant played a critical role in spreading lies that fomented the violence of Jan. 6.',
        },
      ],
    }
  },
}
</script>

<style scoped></style>
