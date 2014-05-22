Pbl-SchedMed
============

SchedMed application for the Pebble Smartwatch in Simply.js
This is an application for tracking where Copaxone injections are supposed to go
I coded this because I kept losing track because of the various body site changes and because I drink

### Environment

This was developed at CloudPebble.net.
You can pretty much copy and paste the code to a Cloud Pebble project and push it to your phone. 
Make sure you have the latest Pebble app on your smart phone and developer mode turned on.

### How to use

Modify the date variables or the array locations to ensure it matches your current schedule.
Experiment a bit and change the date ```on your phone``` to make sure it looks right.
Also change the modulo on line 23 if you change the number of sites. I'll fix this soon.

When you run the app, it'll tell you which location to inject into depending on the day.
If it's past midnight and before 4am, it'll remind you that you're drunk and switch 
to the previous days location.
Beyond that, I wouldn't take the dose past 4am so I just let it do its thing.

### Improvements

I'll make improvements when I get chance.
I really want to make this a C app (when I learn C)
I also want to move config to a separate file (when I learn C)
I also want to publish this (if I learn C)
I don't mind if someone releases this in the store, just don't charge and give me a mention :)


