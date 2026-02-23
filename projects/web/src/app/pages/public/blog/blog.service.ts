import { Injectable } from '@angular/core';
import { BlogPost } from './blog.model';

@Injectable({ providedIn: 'root' })
export class BlogService {
  readonly posts: BlogPost[] = [
    {
      id: '1',
      slug: '5-daily-habits-fitness-routine',
      title: '5 Daily Habits That Will Transform Your Fitness Routine',
      excerpt:
        'Small, consistent habits compound over time into massive results. Discover the five daily practices that top athletes swear by to stay at their best.',
      category: 'Tips',
      coverImage: 'https://picsum.photos/seed/habits/800/450',
      author: { name: 'Sarah Johnson', initials: 'SJ', role: 'Certified Trainer' },
      publishedAt: 'February 15, 2026',
      readTime: 5,
      tags: ['habits', 'routine', 'wellness', 'motivation'],
      content: [
        {
          type: 'p',
          text: 'Small, consistent habits compound into massive results over time. The most successful athletes aren\'t just talented — they\'re disciplined in their daily routines. Here are the five habits that top performers consistently practice to stay at their best year-round.',
        },
        { type: 'h2', text: '1. Start With a Morning Movement Ritual' },
        {
          type: 'p',
          text: 'You don\'t need to run a marathon at 6am. Even 10 minutes of stretching, bodyweight exercises, or a brisk walk primes your nervous system and sets a positive tone for the day. Research shows that morning exercisers are 80% more likely to maintain their routines long-term compared to those who exercise at other times.',
        },
        { type: 'h2', text: '2. Hydrate Before Anything Else' },
        {
          type: 'p',
          text: 'Before coffee, before breakfast — drink at least 500ml of water. Your body is mildly dehydrated after sleep, and rehydrating first thing supports metabolic function, cognitive clarity, and physical performance throughout the day. Adding a pinch of sea salt gives you extra electrolytes at zero cost.',
        },
        { type: 'h2', text: '3. Log Every Workout' },
        {
          type: 'p',
          text: 'What gets measured gets managed. Tracking your sessions — even on paper — creates accountability and reveals patterns you\'d otherwise miss. Are you consistently skipping certain muscle groups? Plateauing on a specific lift? Your training log exposes these blind spots and helps you make targeted improvements.',
        },
        { type: 'h2', text: '4. Prioritize Sleep as Part of Your Training' },
        {
          type: 'p',
          text: 'Muscle isn\'t built in the gym — it\'s built while you sleep. Aiming for 7-9 hours of quality sleep dramatically improves recovery, hormone regulation, and next-day performance. Think of sleep as your most powerful and cost-free supplement. Establish a consistent sleep schedule, even on weekends.',
        },
        { type: 'h2', text: '5. End Each Day With a Recovery Practice' },
        {
          type: 'p',
          text: 'Foam rolling, static stretching, or even a short breathing meditation before bed helps your body transition from stress mode to recovery mode. These 10-15 minute wind-down sessions reduce muscle soreness, improve flexibility, and enhance sleep quality — creating a virtuous cycle that elevates every workout that follows.',
        },
        { type: 'h2', text: 'The Compound Effect in Action' },
        {
          type: 'p',
          text: 'None of these habits are revolutionary on their own. But practiced consistently, they create a foundation of excellence that compounds daily. Start with one this week, add another next week, and within a month you\'ll feel a meaningful difference in every session.',
        },
      ],
    },
    {
      id: '2',
      slug: 'how-to-choose-personal-trainer',
      title: 'How to Choose the Right Personal Trainer for Your Goals',
      excerpt:
        'Not all trainers are created equal. Here\'s what to look for — from credentials to coaching style — when selecting a trainer who truly aligns with your fitness objectives.',
      category: 'Guide',
      coverImage: 'https://picsum.photos/seed/trainer/800/450',
      author: { name: 'Michael Chen', initials: 'MC', role: 'Head of Coaching' },
      publishedAt: 'February 10, 2026',
      readTime: 7,
      tags: ['trainer', 'guide', 'certification', 'goals'],
      content: [
        {
          type: 'p',
          text: 'A great personal trainer can accelerate your results, keep you accountable, and protect you from injury. But the wrong trainer can waste your time and money. Here\'s what to look for when making this important decision.',
        },
        { type: 'h2', text: 'Define Your Goals First' },
        {
          type: 'p',
          text: 'Before searching for a trainer, get crystal clear on what you want to achieve. Weight loss, muscle gain, sports performance, rehabilitation, and general fitness all require different expertise. A trainer who excels at powerlifting may not be the right fit for marathon preparation.',
        },
        { type: 'h2', text: 'Verify Credentials and Certifications' },
        {
          type: 'p',
          text: 'Look for trainers certified by reputable organizations such as NASM, ACE, CSCS, or ISSA. These certifications require passing rigorous exams and demonstrate a commitment to professional standards. Check for specialized certifications relevant to your goals — such as nutrition coaching, corrective exercise, or sport-specific training.',
        },
        { type: 'h2', text: 'What to Look for in a Quality Certification' },
        {
          type: 'ul',
          items: [
            'Accreditation from a recognized fitness governing body',
            'Continuing education requirements to maintain the credential',
            'Scope of practice that matches your specific needs',
            'Liability insurance and CPR/AED certification',
          ],
        },
        { type: 'h2', text: 'Assess Communication Style' },
        {
          type: 'p',
          text: 'Your trainer must explain exercises clearly, correct your form constructively, and adapt their communication to your learning style. During an initial consultation, pay attention to how they listen. Do they ask questions about your history, limitations, and preferences? Or do they jump straight to a generic program?',
        },
        { type: 'h2', text: 'Look for a Results-Oriented Approach' },
        {
          type: 'p',
          text: 'A good trainer should regularly assess your progress and adjust your program accordingly. Beware of coaches who run the same program for every client or never modify the plan based on results. Progress tracking, periodic reassessments, and adaptive programming are hallmarks of a quality professional.',
        },
        { type: 'h2', text: 'Trial Sessions Are Essential' },
        {
          type: 'p',
          text: 'Most quality trainers offer an initial consultation or trial session. Use this opportunity to evaluate their coaching style, attention to your form, and overall rapport. You\'ll be spending significant time with this person — chemistry and trust matter enormously for long-term success.',
        },
      ],
    },
    {
      id: '3',
      slug: 'science-behind-hiit',
      title: 'The Science Behind HIIT: Why Short Workouts Pack a Big Punch',
      excerpt:
        'High-intensity interval training has taken the fitness world by storm. We break down the physiology to explain why HIIT delivers such impressive results in surprisingly little time.',
      category: 'Science',
      coverImage: 'https://picsum.photos/seed/hiit/800/450',
      author: { name: 'Emma Williams', initials: 'EW', role: 'Exercise Physiologist' },
      publishedAt: 'February 5, 2026',
      readTime: 6,
      tags: ['hiit', 'science', 'cardio', 'fat-loss'],
      content: [
        {
          type: 'p',
          text: 'In a world where time is our most scarce resource, High-Intensity Interval Training (HIIT) offers an attractive proposition: maximum results in minimum time. But does the science actually support the hype? The short answer is yes — and here\'s why.',
        },
        { type: 'h2', text: 'What Happens in Your Body During HIIT' },
        {
          type: 'p',
          text: 'During a HIIT session, you alternate between short bursts of near-maximal effort (typically 85-95% of your max heart rate) and brief recovery periods. This pushes your cardiovascular and muscular systems to their limits, triggering a cascade of adaptations that steady-state cardio simply cannot match.',
        },
        { type: 'h2', text: 'The EPOC Effect' },
        {
          type: 'p',
          text: 'One of HIIT\'s biggest advantages is Excess Post-Exercise Oxygen Consumption, or EPOC — commonly called the "afterburn effect." After an intense HIIT session, your body continues burning calories at an elevated rate for up to 24 hours as it works to restore oxygen levels, repair muscle fibers, and return hormones to baseline. Studies show HIIT can elevate metabolism by 6-15% post-exercise.',
        },
        { type: 'h2', text: 'Key Benefits Backed by Research' },
        {
          type: 'ul',
          items: [
            'Burns significantly more fat than steady-state cardio in less time',
            'Improves VO2 max (aerobic capacity) more effectively than traditional cardio',
            'Preserves lean muscle mass while reducing body fat',
            'Enhances insulin sensitivity, reducing type 2 diabetes risk',
            'Requires no equipment — bodyweight HIIT is equally effective',
          ],
        },
        { type: 'h2', text: 'How to Structure an Effective HIIT Session' },
        {
          type: 'p',
          text: 'A typical HIIT session lasts 20-30 minutes including warm-up and cool-down. The work-to-rest ratio varies by fitness level: beginners often start with 1:3 (20 seconds on, 60 seconds rest), while advanced athletes may work at 2:1 or higher. The key is that the "on" intervals are genuinely intense — if you can hold a conversation, you\'re not working hard enough.',
        },
        { type: 'h2', text: 'Important Caveats' },
        {
          type: 'p',
          text: 'HIIT is powerful but demanding. Most fitness professionals recommend limiting true high-intensity sessions to 2-3 times per week with adequate recovery in between. Overuse injuries and central nervous system fatigue are real risks when HIIT is overdone. Pair it with lower-intensity training and prioritize sleep for best results.',
        },
      ],
    },
    {
      id: '4',
      slug: 'nutrition-myths-athletes',
      title: 'Nutrition Myths Every Athlete Needs to Stop Believing',
      excerpt:
        'From "carbs are the enemy" to "eat every 2 hours," fitness nutrition is full of misinformation. A registered nutritionist separates fact from fiction.',
      category: 'Nutrition',
      coverImage: 'https://picsum.photos/seed/nutrition/800/450',
      author: { name: 'Alex Lee', initials: 'AL', role: 'Sports Nutritionist' },
      publishedAt: 'January 28, 2026',
      readTime: 8,
      tags: ['nutrition', 'diet', 'myths', 'performance'],
      content: [
        {
          type: 'p',
          text: 'The fitness nutrition space is plagued by myths, half-truths, and marketing-driven misinformation. These misconceptions can slow your progress, harm your health, and make your diet far more complicated than it needs to be. Let\'s set the record straight on the most persistent myths.',
        },
        { type: 'h2', text: 'Myth 1: Carbohydrates Make You Fat' },
        {
          type: 'p',
          text: 'Carbohydrates are your body\'s preferred fuel source — especially for high-intensity exercise. The idea that carbs inherently cause fat gain is a vast oversimplification. Excess calories from any macronutrient cause fat gain. Athletes who cut carbs drastically often see reduced performance, increased fatigue, and impaired recovery. The type and timing of carbohydrate intake matters far more than avoiding them altogether.',
        },
        { type: 'h2', text: 'Myth 2: You Must Eat Protein Every 2 Hours' },
        {
          type: 'p',
          text: 'The notion of a 30-minute "anabolic window" after training has been largely debunked. While protein timing does matter, your body can effectively use protein for muscle synthesis over a much longer window — up to several hours. Focus on meeting your total daily protein target (typically 1.6-2.2g per kg of bodyweight) rather than stressing about precise timing.',
        },
        { type: 'h2', text: 'Myth 3: Fat-Free Foods Are Healthier' },
        {
          type: 'p',
          text: 'Dietary fat is essential for hormone production, joint health, and the absorption of fat-soluble vitamins (A, D, E, and K). When manufacturers remove fat, they typically replace it with sugar, refined starches, or artificial additives to maintain palatability. Healthy fats from sources like avocados, nuts, olive oil, and fatty fish should be a regular part of every athlete\'s diet.',
        },
        { type: 'h2', text: 'Myth 4: Supplements Are Necessary for Results' },
        {
          type: 'p',
          text: 'The supplement industry is a multi-billion dollar market built largely on overpromising. The truth is that for most people eating a reasonably balanced diet, supplements provide marginal benefit. Creatine monohydrate and caffeine have robust evidence behind them. Everything else should be viewed with skepticism. Master the basics — sleep, training, whole food nutrition — before spending money on supplements.',
        },
        { type: 'h2', text: 'What Actually Matters' },
        {
          type: 'ul',
          items: [
            'Total calorie intake aligned with your goals (surplus for muscle, deficit for fat loss)',
            'Adequate protein distributed throughout the day',
            'Plenty of vegetables, fruits, and whole grains',
            'Hydration — most athletes are chronically underhydrated',
            'Consistency over perfection — sustainable beats optimal',
          ],
        },
      ],
    },
    {
      id: '5',
      slug: 'yoga-vs-pilates',
      title: 'Yoga vs. Pilates: Finding Your Perfect Mind-Body Practice',
      excerpt:
        'Both promise flexibility, core strength, and mental clarity — but they\'re fundamentally different disciplines. This guide helps you decide which practice suits your lifestyle and goals.',
      category: 'Wellness',
      coverImage: 'https://picsum.photos/seed/yoga/800/450',
      author: { name: 'Rachel Brown', initials: 'RB', role: 'Wellness Coach' },
      publishedAt: 'January 20, 2026',
      readTime: 5,
      tags: ['yoga', 'pilates', 'mindfulness', 'flexibility'],
      content: [
        {
          type: 'p',
          text: 'Yoga and Pilates are often mentioned in the same breath, and it\'s easy to see why — both improve flexibility, build body awareness, and offer a welcome counterpoint to high-intensity training. But they have distinct philosophies, methods, and benefits. Here\'s how to choose the right one for you.',
        },
        { type: 'h2', text: 'The Origins and Philosophy' },
        {
          type: 'p',
          text: 'Yoga is a 5,000-year-old practice rooted in Indian philosophy, integrating breath, movement, and meditation to unite mind, body, and spirit. Pilates was developed in the 20th century by Joseph Pilates as a rehabilitation system focusing on controlled movement, postural alignment, and core strength. Yoga nourishes the whole being; Pilates engineers a stronger, better-aligned body.',
        },
        { type: 'h2', text: 'Key Differences at a Glance' },
        {
          type: 'ul',
          items: [
            'Yoga emphasizes flexibility, breathwork, and mindfulness; Pilates focuses on core stability and precision',
            'Yoga classes vary widely (from restorative to intense power yoga); Pilates is more consistent in its method',
            'Pilates often uses specialized equipment (reformer, Cadillac); yoga requires only a mat',
            'Yoga includes a meditative and spiritual dimension; Pilates is primarily physical',
          ],
        },
        { type: 'h2', text: 'Choose Yoga If...' },
        {
          type: 'p',
          text: 'You want a holistic practice that also addresses stress, anxiety, and mental clarity. Yoga\'s emphasis on breathwork and present-moment awareness makes it particularly effective as a stress management tool. It\'s also highly adaptable — gentle styles like Yin or Hatha are accessible to beginners and those with mobility limitations, while Ashtanga and Power Yoga challenge even seasoned athletes.',
        },
        { type: 'h2', text: 'Choose Pilates If...' },
        {
          type: 'p',
          text: 'You\'re focused on posture, back pain, injury rehabilitation, or building a strong functional core. Pilates excels at corrective work and is widely prescribed by physiotherapists. Athletes who use Pilates as cross-training often see significant improvements in stability, movement efficiency, and injury resilience.',
        },
        { type: 'h2', text: 'The Best Answer?' },
        {
          type: 'p',
          text: 'Do both. Many athletes and wellness practitioners find that yoga and Pilates complement each other perfectly — Pilates builds the core foundation, while yoga develops the flexibility and mental composure to perform at your best. If you\'re pressed for time, choose based on your primary goal: mental restoration or physical rehabilitation.',
        },
      ],
    },
    {
      id: '6',
      slug: 'home-gym-budget',
      title: 'Building a Home Gym That Actually Works — On Any Budget',
      excerpt:
        'You don\'t need thousands of dollars or a dedicated room to create an effective home training space. Here\'s how to set up a functional gym from scratch.',
      category: 'Equipment',
      coverImage: 'https://picsum.photos/seed/homegym/800/450',
      author: { name: 'Sarah Johnson', initials: 'SJ', role: 'Certified Trainer' },
      publishedAt: 'January 15, 2026',
      readTime: 6,
      tags: ['home-gym', 'equipment', 'budget', 'setup'],
      content: [
        {
          type: 'p',
          text: 'The pandemic accelerated a home gym revolution — and for good reason. A well-equipped home gym eliminates commute time, gym fees, and the social anxiety of crowded fitness spaces. The good news: you can build an incredibly effective setup for less than most people think.',
        },
        { type: 'h2', text: 'Start With the Essentials (Under £150)' },
        {
          type: 'p',
          text: 'Resistance bands, a set of adjustable dumbbells, and a quality yoga mat can cover 80% of your training needs. Resistance bands are particularly underrated — they allow progressive overload for every major muscle group, travel easily, and cost almost nothing. Add a pull-up bar for the doorframe and you have a complete upper-body pulling system.',
        },
        { type: 'h2', text: 'The Mid-Range Setup (£150-£500)' },
        {
          type: 'ul',
          items: [
            'Adjustable dumbbell set (covers multiple weight ranges in one)',
            'Kettlebell (a single 16kg for most, 20-24kg for advanced)',
            'Pull-up/dip station for a full bodyweight rig',
            'Foam roller and resistance bands for recovery',
            'Jump rope for cardiovascular training',
          ],
        },
        { type: 'h2', text: 'The Premium Setup (£500+)' },
        {
          type: 'p',
          text: 'If your budget allows, a power rack with barbell and weight plates opens up the full spectrum of strength training — squats, deadlifts, bench press, and overhead press. Second-hand equipment from sites like Facebook Marketplace or Gumtree can reduce costs by 50-70%. Many commercial gyms sell off equipment during renovations at excellent prices.',
        },
        { type: 'h2', text: 'Flooring: Don\'t Skip This' },
        {
          type: 'p',
          text: 'Rubber gym tiles or interlocking foam mats protect your floor, reduce noise, and provide grip. This is one investment that genuinely improves your training experience and shouldn\'t be skipped regardless of budget. A 10m² set of quality rubber tiles typically costs £80-£120.',
        },
        { type: 'h2', text: 'Maximizing a Small Space' },
        {
          type: 'p',
          text: 'A 3m x 3m space is sufficient for most bodyweight and free weight training. Wall-mounted storage keeps the area tidy. Mirrors aren\'t vanity — they help you monitor form and make the space feel larger. The single biggest mistake people make is over-buying equipment upfront. Start minimal, identify what you actually use, and expand from there.',
        },
      ],
    },
  ];

  getPostBySlug(slug: string): BlogPost | undefined {
    return this.posts.find((p) => p.slug === slug);
  }

  getRelatedPosts(currentSlug: string, category: string, limit = 3): BlogPost[] {
    return this.posts
      .filter((p) => p.slug !== currentSlug && p.category === category)
      .slice(0, limit)
      .concat(
        this.posts
          .filter((p) => p.slug !== currentSlug && p.category !== category)
          .slice(0, Math.max(0, limit - this.posts.filter((p) => p.slug !== currentSlug && p.category === category).length)),
      )
      .slice(0, limit);
  }
}
