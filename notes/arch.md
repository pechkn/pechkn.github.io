# Arch Linux guide

Simple and barebones Arch Linux can be installed in few steps.

1. Connect to network. In case of wired one, process is automatic. In case of Wi-Fi, such command can be used:

```
iwctl —passphrase PASSWORD station wlan0 connect SSID
```

---

2. Partition drive. The easiest way to do that is via pseudographic _cfdisk_ utility:

```
cfdisk /dev/sda
```

---

3. Format drive. Two partitions, one for _/_ and another for _/boot_ can be created in 5 commands:

```
mkfs.vfat /dev/sda1
mkfs.ext4 /dev/sda2
mount /dev/sda2 /mnt
mkdir /mnt/boot
mount /dev/sda1 /mnt/boot
```

---

4. Install base system and chroot into. After this step system becomes operational already:

```
pacstrap /mnt base linux linux-firmware
genfstab -U /mnt >> /mnt/etc/fstab
arch-chroot /mnt
```

---

5. Install and configure bootloader. _GRUB_ is widely used, but breaks often so i prefer _systemd-boot_. It requires multiple config files with following contents:

/boot/loader/loader.conf

```
default arch.conf
timeout 5
console-mode keep
```

/boot/loader/entries/arch.conf

```
title   arch
linux   /vmlinuz-linux
initrd  /initramfs-linux.img
options root=/dev/sda2 rw quiet vga=current loglevel=1
```

And, in case of dualbooting,

/boot/loader/entries/windows.conf

```
title Windows 10
efi /EFI/Microsoft/Boot/bootmgfw.efi
```

Finally, to install loader, run

```
bootctl install
```

---

6. Configure users. Root's password needs to be set and non-root user created:

```
passwd
useradd -m -g wheel user
passwd user
exit
```

---

7. Install and configure packages. I usually do at least following commands:

```
pacman -S networkmanager neovim sudo tlp git xorg-xinit xorg-xset alacritty npm nodejs code firefox rsync
systemctl enable NetworkManager
systemctl enable tlp
echo '%wheel ALL=(ALL) ALL' >> /etc/sudoers
git clone https://github.com/infret/dotfiles
rsync -a dotfiles/ .
```

Most of my configs are fetched from GitHub, so I usually care only about one system file,
/etc/systemd/system/getty@tty1.service.d/override.conf

```
[Service]
ExecStart=
ExecStart=-/usr/bin/agetty --autologin user --noclear %I $TERM
```

---

8. Create swap. This is optional, but usually helpful:

```
dd if=/dev/zero of=/swapfile bs=1M count=2048
chmod 600 /swapfile
mkswap /swapfile
swapon /swapfile
```
