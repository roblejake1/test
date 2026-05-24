local Players = game:GetService("Players")
local player = Players.LocalPlayer
local character = player.Character or player.CharacterAdded:Wait()

for _, part in ipairs(character:GetDescendants()) do
	if part:IsA("BasePart") then
		local fire = Instance.new("Fire")
		fire.Size = 8
		fire.Heat = 10
		fire.Parent = part
	end
end
