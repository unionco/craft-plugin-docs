# Connectivity

There are several prerequisites required for this library to function properly. In addition to the actual software installed on each host, _the most critical step is establishing a key-based SSH connection between the two hosts_.

Connectivity is only required in 1 direction, `local` -> `remote`; SSH/SCP connections will never be initiated from the `remote` host.

## Key-based SSH Connectivity

Consider 2 hosts, `remote` and `local`.

1. From `local`, verify an SSH keys keypair exists. If not, create it.
```bash
local $ ls -la ~/.ssh/
```

2. If there is no `~/.ssh/id_rsa` and `~/.ssh/id_rsa.pub`, create them using `ssh-keygen`.
   1. If you are using a specific key-pair for each host, name your keys accordingly. For this example, the private and public keys will use the default names, `id_rsa` and `id_rsa.pub`, respectively.
```bash
local $ ssh-keygen
```


3. Now, copy the public key to the remote server. This is simple using the `ssh-copy-id` command, which comes with `openssh` on most distributions. Replace your user/remote hostname/public key path appropriately.

```bash
local $ ssh-copy-id -i ~/.ssh/id_rsa.pub user@remote
```

4. At this point, you should be able to SSH to the remote server using only the private key, username, and hostname.

```bash
local $ ssh -i ~/.ssh/id_rsa user@remote
```

5. (Optional) Add an SSH config entry

```bash
local $ vim ~/.ssh/config
```
```
# ...

Host remote
    Hostname <IP or DNS name>
    IdentityFile ~/.ssh/id_rsa
    User <user>

# ...
```
    1. Using this entry, you should be able to connect using only `ssh remote`
