# Changelog

## 3.0.0-beta.0

* Use `room.calibrationTimestamp` for better sync.

  In previous versions, this plugin relies on user's computer time to sync the
  playback time of the player, which causes bug. Now we can have a more precise
  time synced to our server.

* Support more than one hosts.

* It requires `white-web-sdk >= 2.13.8`.
