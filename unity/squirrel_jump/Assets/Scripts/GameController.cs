using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using System.Runtime.InteropServices;

public class GameController : MonoBehaviour
{
    [DllImport("__Internal")]
    private static extern void LoseMiniGame();
    [DllImport("__Internal")]
    private static extern void WinMiniGame();

    public GameObject player;
    public GameObject enemy;
    public GameObject bush;
    public Transform enemySpawnPoint;
    public Transform bushSpawnPoint;

    private float nextEnemySpawn = 2.0f;
    private float nextBushSpawn = 1.0f;
    public int enemiesToSpawn = 10;
    private GameObject[] spawnedEnemies;
    private float minEnemyTimingGap = 1.0f;
    private float maxEnemyTimingGap = 2.5f;
    private float minBushTimingGap = 2.0f;
    private float maxBushTimingGap = 4.0f;
    private bool gameIsDone;

    // Start is called before the first frame update
    void Start()
    {
        gameIsDone = false;
    }

    // Update is called once per frame
    void Update()
    {
        if (Time.time >= nextEnemySpawn && enemiesToSpawn > 0)
        {
            float spawnTimer = Random.Range(minEnemyTimingGap, maxEnemyTimingGap);
            nextEnemySpawn += spawnTimer;
            Instantiate(enemy, enemySpawnPoint.transform.position, enemySpawnPoint.transform.rotation);
            enemiesToSpawn--;
        }

        if (Time.time >= nextBushSpawn)
        {
            nextBushSpawn += Random.Range(minBushTimingGap, maxBushTimingGap);
            Instantiate(bush, bushSpawnPoint.transform.position, bushSpawnPoint.transform.rotation);
        }

        spawnedEnemies = GameObject.FindGameObjectsWithTag ("Enemy");

        if (player != null && spawnedEnemies.Length <= 0 && enemiesToSpawn <= 0 && !gameIsDone)
        {
            gameIsDone = true;
            WinMiniGame();
        }
        else if (player == null && !gameIsDone)
        {
            gameIsDone = true;
            LoseMiniGame();
        }
    }
}
